const middleware = {}

middleware['routerAuth'] = require('../middleware/routerAuth.js')
middleware['routerAuth'] = middleware['routerAuth'].default || middleware['routerAuth']

export default middleware
