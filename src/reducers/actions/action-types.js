export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
// export const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const CAT_GETS = createRequestTypes('CAT_GETS')
export const CAT_GET = createRequestTypes('CAT_GET')
export const CAT_UPDATE = createRequestTypes('CAT_UPDATE')
export const CAT_DELETE = createRequestTypes('CAT_DELETE')
export const CAT_CREATE = createRequestTypes('CAT_CREATE')

export const TOKEN_GET = createRequestTypes('TOKEN_GET')

export const TOKEN_READY = 'TOKEN_READY'
export const TOKEN_REMOVE = "TOKEN_REMOVE"
export const UPDATE_AUTH_FORM =  'UPDATE_AUTH_FORM'
export const UPDATE_CAT_CREATING_FORM = 'UPDATE_CAT_CREATING_FORM'
export const UPDATE_CAT_UPDATING_FORM = 'UPDATE_CAT_UPDATING_FORM'


function action(type, payload = {}) {
  return {type, ...payload}
}

export const catGetsActions = {
  request: () => action(CAT_GETS[REQUEST]),
  success: (cats) => action(CAT_GETS[SUCCESS], { cats}),
}

export const catGetActions = {
  request: id => action(CAT_GET[REQUEST], {id}),
  success: cat => action(CAT_GET[SUCCESS], { ...cat }),
}

export const catUpdateActions = {
  request: cat => action(CAT_UPDATE[REQUEST], {...cat}),
  success: cat => action(CAT_UPDATE[SUCCESS], {...cat}),
}

export const catDeleteActions = {
  request: id => action(CAT_DELETE[REQUEST], {id}),
  success: id => action(CAT_DELETE[SUCCESS], {id}),
}

export const catCreateActions = {
  request: cat => action(CAT_CREATE[REQUEST], {...cat}),
  success: () => action(CAT_CREATE[SUCCESS]),
}

export const tokenGetActions = {
  request: (user) => action(TOKEN_GET[REQUEST], {...user}),
  success: (creds) => action(TOKEN_GET[SUCCESS], { ...creds }),
}

export const tokenReadyAction = () => action(TOKEN_READY)
export const tokenRemoveAction = () => action(TOKEN_REMOVE)
export const updateAuthFormAction = form => action(UPDATE_AUTH_FORM, {...form})
export const updateCatCreatingFormAction = form => action(UPDATE_CAT_CREATING_FORM, {...form})
export const updateCatUpdatingFormAction = form => action(UPDATE_CAT_UPDATING_FORM, {...form})