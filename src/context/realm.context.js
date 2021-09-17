import React, { createContext, useContext } from "react"
import Realm from "realm";
import { dbOptions, LOG_OBJECT_SCHEME } from "src/db/log.scheme";

export const RealmContext = createContext();

export const RealmProvider = (props) => {

    const insert = values => new Promise((resolve, reject) => {
        Realm.open(dbOptions).then(realm => {
            realm.write(() => {
                realm.create(LOG_OBJECT_SCHEME, values);
                resolve(values);
                console.log("Values added successfully!");
            });
        }).catch(reject)
    })

    const fetch = () => new Promise((resolve, reject) => {
        Realm.open(dbOptions).then(realm => {
            realm.write(() => {
                let all = realm.objects(LOG_OBJECT_SCHEME);
                resolve(all);
            });
        }).catch(reject)
    })

    const contextValue = { insert, fetch }

    return (
        <RealmContext.Provider value={contextValue}>
            {props.children}
        </RealmContext.Provider>
    );
}

export const useRealm = () => useContext(RealmContext);