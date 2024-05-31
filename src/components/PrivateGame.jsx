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
            console.log(results);
            setPrivateTable(results);
            // setTableName(privateTable.tableName)
            // setTableCode(privateTable.tableId)
            // setTableBankroll(privateTable.startingBank)
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        setTheTable();
    }, [])



    return (
        <div>
            {privateTable ?
                <GameBoard username={user.name} tableName={tableName} tableCode={tableCode} tableBankroll={tableBankroll} privateTable={privateTable} />
                :
                <div>loading</div>}

        </div>
    )
}

export default PrivateGame