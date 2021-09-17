export const LOG_OBJECT_SCHEME = "LogObject";

export const LogObjectScheme = {
    name: LOG_OBJECT_SCHEME,
    primaryKey: 'id',
    properties: {
        id: 'int',
        values: 'string',
        createdAt: 'date',
    }
};

export const dbOptions = {
    path: 'picker.realm',
    schema: [LogObjectScheme],
};