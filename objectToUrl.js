// Converts a URL Query String into an object map
function convertQueryToMap(query) {

    const ansObj = {}

    const split = query.split('.')

    let path = []

    for (let i = 0; i < (split.length); i++) {
        // console.error('run')
        if (split[i].includes('=')) {

            const equalsSplit = split[i].split('=')
            path.push(equalsSplit[0])

            path.reduce((o, i, index) => {
                if (index === (split.length - 1)) {
                    o[i] = equalsSplit[1]

                } else if (!o[i]) o[i] = {}

                return o[i]

                // return obj
            }, ansObj)



            ansObj[path[0]]


        } else {
            path.push(split[i])
            // ansObj[split[i]] = {}
            // path += (i ? '.' : '') + split[i]
        }
    }

    console.error(ansObj)




    // add your code here
}
convertQueryToMap('user.name.firstname=Bob')


// {
//     'user': {
//       'name': {
//         'firstname': 'Bob',
//         'lastname': 'Smith'
//       },
//       'favoritecolor': 'Light Blue'
//     }
//   }