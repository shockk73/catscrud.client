import { put, takeLatest, all } from 'redux-saga/effects'
import { useCatApi } from "./hooks/api/cat.api"
import * as types from "./reducers/actions/action-types"
import { getJwtTokenData, setToLocalSorage } from './hooks/auth.hook'
import { useUserApi } from './hooks/api/user.api'


const catApi = useCatApi(getJwtTokenData().jwtToken)

const userApi = useUserApi()




function* fetchCats() {
  const cats = yield catApi.getCats();    
  yield put(types.catGetsActions.success(cats));
}

function* fetchCat(action) {
    const cat = yield catApi.getCat({ id: action.id });    
    yield put(types.catGetActions.success( {cat} ));
    yield put(types.updateCatUpdatingFormAction( cat ));
}

function* createCat(action) {
    yield catApi.addCat( { name: action.name, age: action.age  } );    
    yield put(types.catCreateActions.success());
    yield put(types.updateCatCreatingFormAction({ name: "", age: "" }));
    yield put( types.catGetsActions.request() )
}

function* updateCat(action) {
    yield catApi.updateCat({ cat: { id: action.id, name: action.name, age: action.age, isAlive: action.isAlive } }) 
    yield put(types.catUpdateActions.success({ cat: { id: action.id, name: action.name, age: action.age, isAlive: action.isAlive } }));
}

function* deleteCat(action) {
    yield catApi.deleteCat({ id: action.id });    
    yield put(types.catDeleteActions.success(action.id));
}

function* getToken(action) {
    const token = yield userApi.getToken({ username: action.username, password: action.password })
    yield put( types.tokenGetActions.success({ jwtToken: token.token, userName: token.userName }) )
}


function* fetchCatsWatcher() {
    yield takeLatest( types.CAT_GETS[types.REQUEST], fetchCats)
}
function* fetchCatWatcher() {
    yield takeLatest( types.CAT_GET[types.REQUEST], fetchCat)
}
function* createCatWatcher() {
    yield takeLatest(types.CAT_CREATE[types.REQUEST], createCat)
}
function* updateCatWatcher() {
    yield takeLatest(types.CAT_UPDATE[types.REQUEST], updateCat)
}
function* deleteCatWatcher() {
    yield takeLatest(types.CAT_DELETE[types.REQUEST], deleteCat)
}
function* getTokenWatcher() {
    yield takeLatest(types.TOKEN_GET[types.REQUEST], getToken)
}


export default function* rootSaga() {
   yield all([
    fetchCatsWatcher(),
    fetchCatWatcher(),
    createCatWatcher(),
    updateCatWatcher(),
    deleteCatWatcher(),
    getTokenWatcher()
   ]);
}