import { generateNumbers, assignNumbers } from 'src/redux/features/home.feature';
import { takeLatest, put } from 'redux-saga/effects';

function* handleGenerateNumbers({ payload: { insert } }) {
    const values = [];
    for (let i = 0; i < 3; i++) values.push(~~(Math.random() * 10));
    insert({ id: ~~(Math.random() * 10000), createdAt: new Date(), values: values.toString() });
    yield put(assignNumbers({ values }));
}

export default function* watchUsers() {
    yield takeLatest(generateNumbers.toString(), handleGenerateNumbers);
}