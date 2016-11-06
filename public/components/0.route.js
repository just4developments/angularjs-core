window.routes = {
    '/product-list': {
        template: '<product-list data="$resolve.list"></product-list>',
        resolve: {
            list: ($q) => {
                return $q.when('abc');
            }
        }
    }
}