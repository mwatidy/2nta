export default function (context) {

    // var routeStart = context.route.path.toLowerCase().match(/^\/(.*)\/.*$/i);

    // switch(routeStart) {

    //     case "company":
    //         context.store.commit('main/setUserGroup', 'company');
    //         break

    //     case "user":
    //         context.store.commit('main/setUserGroup', 'user');
    //         break

    //     case "login":
    //     case "register":
    //         context.store.state.auth.isAuthenticated && context.redirect('/user')
    //         break;

    //     default:
    //         context.redirect('/community')
    // }

    var isCompany = /^\/copmany/i.test(context.route.path);
    var loginOrRegister = /^\/register|^\/login/i.test(context.route.path);

    if(loginOrRegister) {

        context.store.state.auth.isAuthenticated && context.redirect('/user')
        
    }

    isCompany ? context.store.commit('main/setUserGroup', 'company') : context.store.commit('main/setUserGroup', 'user');
}

