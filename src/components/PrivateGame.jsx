import React, { useEffect, useState } from 'react';
import GameBoard from './table/GameBoard';
import { useParams } from 'react-router-dom';
import { databases, DATABASE_ID, COLLECTION_ID_TABLES, COLLECTION_ID_USERS } from '../appwriteConfig';
import { ID, Query } from 'appwrite';
import { useAuth } from '../auth/authContext';

function PrivateGame() {
    const [privateTable, setPrivateTable] = useState(null);
    const [tableName, setTableName] = useState('');
    const [tableCode, setTableCode] = useState('');
    const [tableBankroll, setTableBankroll] = useState(0);
    const [tableRolls, setTableRolls] = useState([]);
    const [toggleRefresh, setToggleRefresh] = useState(true);

    const { user, handleUserLogout, userPrefs } = useAuth();

    let params = useParams();

    const setTheTable = async () => {
        let results;
        try {
            let promise = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_TABLES,
                [
                    Query.equal('$id', params.tableId)
                ]
            );
            results = promise.documents[0]
            //console.log(results);
            setPrivateTable(results);
        } catch (error) {
            console.log(error);
        }
    }

    const updateDbRolls = async (left, right, total) => {
        if (privateTable) {
            let table;
            try {
                let promise = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID_TABLES,
                    [
                        Query.equal('tableId', privateTable.tableId)
                    ]
                );
                //console.log(promise.documents[0]);
                if (promise.total > 0) {
                    table = promise.documents[0];
                    try {
                        const res = await databases.updateDocument(
                            DATABASE_ID,
                            COLLECTION_ID_TABLES,
                            table.$id,
                            {
                                'rolls': [...table.rolls,
                                { leftDie: parseInt(left), rightDie: parseInt(right), rollTotal: parseInt(total) }
                                ],
                            }
                        );
                        console.log("NEW ROLL", res);
                        return res;
                    } catch (error) {
                        console.log(error);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const adjustBankroll = async (profit) => {
        console.log("UP OR DOWN... : ", profit);
        if (profit > 0 || profit < 0) {


            if (privateTable) {
                let table;
                try {
                    let promise = await databases.listDocuments(
                        DATABASE_ID,
                        COLLECTION_ID_TABLES,
                        [
                            Query.equal('tableId', privateTable.tableId)
                        ]
                    );
                    //console.log(promise.documents[0]);
                    if (promise.total > 0) {
                        table = promise.documents[0];
                        let found = false;
                        for (let i = 0; i < table.users.length; i++) {
                            if (table.users[i].user_id === user.$id) {
                                found = true;
                                console.log(table.users[i].bankroll);
                                try {
                                    const res = await databases.updateDocument(
                                        DATABASE_ID,
                                        COLLECTION_ID_TABLES,
                                        table.$id,
                                        {
                                            'users': [...table.users,
                                            { $id: table.users[i].$id, username: user.name, user_id: user.$id, bankroll: parseInt(table.users[i].bankroll + profit) }
                                            ],
                                        }
                                    );
                                    if (profit > 0) {

                                        console.log("PROFIT!!!", res);
                                    } else if (profit < 0) {
                                        console.log("LOSS!!!", res);
                                    }
                                    setTheTable()
                                } catch (error) {
                                    console.log(error);
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }


    useEffect(() => {
        setTheTable();
    }, [])

    return (
        <div>
            {privateTable ?
                <GameBoard
                    username={user.name}
                    userId={user.$id}
                    tableName={tableName}
                    tableCode={tableCode}
                    tableBankroll={tableBankroll}
                    privateTable={privateTable}
                    updateDbRolls={updateDbRolls}
                    adjustBankroll={adjustBankroll}
                />
                :
                <div>loading</div>}

        </div>
    )
}

export default PrivateGame