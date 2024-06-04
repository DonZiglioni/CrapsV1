import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/pyBetsLogoWhite.png'
import { useAuth } from '../auth/authContext';
import { databases, DATABASE_ID, COLLECTION_ID_TABLES, COLLECTION_ID_USERS } from '../appwriteConfig';
import { ID, Query } from 'appwrite';
import '../components/Screens.css';
import Button from './Button';


function HomeUser() {
    const [toggleCreateTable, setToggleCreateTable] = useState(false);
    const [toggleSavedTables, setToggleSavedTables] = useState(false);
    const [toggleJoinTable, setToggleJoinTable] = useState(false);
    const [savedTables, setSavedTables] = useState([]);
    const [tableName, setTableName] = useState('');
    const [tableCode, setTableCode] = useState('');
    const [tableMin, setTableMin] = useState(5);
    const [tableMax, setTableMax] = useState(2000);
    const [tableBankroll, setTableBankroll] = useState();
    const [publicBankroll, setPublicBankroll] = useState(0);
    const [tableId, setTableId] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const navigate = useNavigate();
    const { user, handleUserLogout, userPrefs } = useAuth();
    console.log("Someone has been logged in : ", user.$id);

    const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const randomTableId = () => {
        let tempId = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length)
            tempId = tempId + chars[randomIndex];
        }
        return tempId;
    }

    const createNewTable = async () => {
        if (tableName === '') {
            alert('Please enter a table name')
        }
        setTableId(randomTableId());
        let startingBank = parseInt(tableBankroll)
        try {
            const promise = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID_TABLES,
                ID.unique(),
                {
                    'tableName': tableName,
                    'tableId': tableId,
                    'tableMin': tableMin,
                    'tableMax': tableMax,
                    'startingBank': startingBank,
                    'users': [
                        { username: user.name, user_id: user.$id, bankroll: parseInt(tableBankroll) }
                    ],
                }
            );
            console.log(promise);
            navigate(`/userTable/${promise.$id}`)
        } catch (error) {
            console.log(error);
        }
    }

    const getSavedTables = async () => {
        console.log("yo");
        try {
            let tables = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_USERS,
                [
                    Query.equal('user_id', user.$id)
                ]
            );
            setSavedTables(tables.documents);
        } catch (error) {
            console.log(error);
        }
    }

    const joinTable = async () => {
        //console.log('JOIN PLZ', tableCode);
        let table;
        try {
            let promise = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_TABLES,
                [
                    Query.equal('tableId', tableCode)
                ]
            );
            if (promise.total > 0) {
                table = promise.documents[0];
                let found = false;
                for (let i = 0; i < table.users.length; i++) {
                    if (table.users[i].user_id === user.$id) {
                        found = true;
                    }
                }
                if (found === true) {
                    navigate(`/userTable/${table.$id}`)
                } else {
                    try {
                        const promise = await databases.updateDocument(
                            DATABASE_ID,
                            COLLECTION_ID_TABLES,
                            table.$id,
                            {
                                'users': [...table.users,
                                { username: user.name, user_id: user.$id, bankroll: parseInt(table.startingBank) }
                                ],
                            }
                        );
                        //console.log("NEW GUY", promise);
                        navigate(`/userTable/${table.$id}`)
                    } catch (error) {
                        console.log(error);
                    }
                }

            } else {
                alert('Error: Code Not Found')
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getSavedTables();
        setTableId(randomTableId());
    }, [])

    return (
        <div className=''>
            <div className='welcome-container'>
                {toggleCreateTable ? <div className='create-table'>
                    <h1 className='PYBText'>Create Table</h1>
                    <input type='text' className='input' placeholder='Table Name...' value={tableName} onChange={(e) => { setTableName(e.target.value) }} />
                    <button className='button2' onClick={() => createNewTable()}>Create Table</button>
                    <hr style={{ width: '60%' }}></hr>
                    <div className='table-options'>
                        <span className='PYBText'>Table Min:</span>
                        <ul className='list'>
                            <Button selected={tableMin === 5} label={'5'} onSelect={() => setTableMin(5)} />
                            <Button selected={tableMin === 10} label={'10'} onSelect={() => setTableMin(10)} />
                            <Button selected={tableMin === 15} label={'15'} onSelect={() => setTableMin(15)} />
                            <Button selected={tableMin === 25} label={'25'} onSelect={() => setTableMin(25)} />
                            <Button selected={tableMin === 50} label={'50'} onSelect={() => setTableMin(50)} />
                            <Button selected={tableMin === 100} label={'100'} onSelect={() => setTableMin(100)} />
                        </ul>
                        <span className='PYBText'>Table Max:</span>
                        <ul className='list'>
                            <Button selected={tableMax === 1000} label={'1000'} onSelect={() => setTableMax(1000)} />
                            <Button selected={tableMax === 2000} label={'2000'} onSelect={() => setTableMax(2000)} />
                            <Button selected={tableMax === 5000} label={'5000'} onSelect={() => setTableMax(5000)} />
                            <Button selected={tableMax === 10000} label={'10000'} onSelect={() => setTableMax(10000)} />
                            <Button selected={tableMax === 25000} label={'25000'} onSelect={() => setTableMax(25000)} />
                            <Button selected={tableMax === 50000} label={'50000'} onSelect={() => setTableMax(50000)} />
                        </ul>
                        <span className='PYBText'>Bankroll:</span>
                        <ul className='list'>
                            <input type='text' className='input' placeholder='Bankroll...' value={tableBankroll} onChange={(e) => { setTableBankroll(e.target.value) }} />
                        </ul>
                        {/* <span className='PYBText'>Table Max:</span>
                        <ul className='list'>
                            <Button selected={tableMax === 1000} label={'1000'} onSelect={() => setTableMax(1000)} />
                            <Button selected={tableMax === 2000} label={'2000'} onSelect={() => setTableMax(2000)} />
                            <Button selected={tableMax === 5000} label={'5000'} onSelect={() => setTableMax(5000)} />
                            <Button selected={tableMax === 10000} label={'10000'} onSelect={() => setTableMax(10000)} />
                            <Button selected={tableMax === 25000} label={'25000'} onSelect={() => setTableMax(25000)} />
                            <Button selected={tableMax === 50000} label={'50000'} onSelect={() => setTableMax(50000)} />
                        </ul> */}
                        {/* <input type='range' id='min' step={'5'} min={5} max={2000} value={tableMin} onChange={(e) => setTableMin(e.target.value)} />
                        <span className='PYBText'>{tableMin}</span> */}
                        <span className='PYBText' onClick={() => setToggleCreateTable(!toggleCreateTable)}>Go Back</span>
                        <span className='PYBText' onClick={() => randomTableId()}>Go Back</span>
                    </div>
                </div> : null}


                {toggleSavedTables ? <div className='create-table'>
                    <h1 className='PYBText'>Saved Tables</h1>
                    <hr style={{ width: '60%' }}></hr>
                    <ul>
                        {savedTables.map((e, index) => {
                            return (
                                <li key={index} onClick={() => navigate(`/userTable/${e.tables[0].$id}`)}>
                                    <div className='saved-table'>
                                        <span className='PYBText'>{e.tables[0].tableName} | {e.tables[0].tableId} | Bankroll: {e.bankroll}  </span>
                                        <span className='PYBText'></span>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                    <span className='PYBText' onClick={() => setToggleSavedTables(!toggleSavedTables)}>Go Back</span>
                    <span className='PYBText' onClick={() => getSavedTables()}>Go Back</span>

                </div> : null}


                {toggleJoinTable ? <div className='create-table'>
                    <h1 className='PYBText'>Join Table</h1>
                    <hr style={{ width: '60%' }}></hr>
                    <input type='text' className='input' placeholder='Enter Table Code...' value={tableCode} onChange={(e) => { setTableCode(e.target.value) }} />
                    <button className='button2' onClick={() => joinTable()}>Join Table</button>

                    <span className='PYBText' onClick={() => setToggleJoinTable(!toggleJoinTable)}>Go Back</span>
                    {/* <span className='PYBText' onClick={() => getSavedTables()}>Go Back</span> */}

                </div> : null}


                <img src={logoWhite} style={{ height: '200px', width: 'auto' }} />
                <div className='welcome-menu'>
                    {/* <button onClick={() => navigate('/public')}>Play Now!</button> */}
                    <div className='authorized'>
                        <div className='user-buttons'>
                            <button className='button' onClick={() => navigate('/public')}>Play Free</button>
                            <button className='button' onClick={() => setToggleCreateTable(!toggleCreateTable)}>Create Table</button>
                            <button className='button' onClick={() => setToggleSavedTables(!toggleSavedTables)}>Saved Tables</button>
                            <button className='button' onClick={() => setToggleJoinTable(!toggleJoinTable)}>Join Table</button>
                            <button className='button' onClick={() => handleUserLogout()}>Logout</button>
                        </div>
                        <div className='user-stats'>
                            <span className='PYBText'>UserID:</span>
                            {user.$id}
                            <span className='PYBText'>Username:</span>
                            {user.name}
                            <span className='PYBText'>Bankroll:</span>
                            ${userPrefs.bankroll}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeUser;