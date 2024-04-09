// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    const ansObj = {}

    query.split('&').forEach((section) => {
        const split = section.split('.')

        let path = []

        for (let i = 0; i < (split.length); i++) {
            if (split[i].includes('=')) {

                const equalsSplit = split[i].split('=')
                path.push(equalsSplit[0])

                path.reduce((o, i, index) => {
                    if (index === (split.length - 1)) {
                        o[i] = decodeURIComponent(equalsSplit[1])

                    } else if (!o[i]) o[i] = {}

                    return o[i]
                }, ansObj)



                ansObj[path[0]]


            } else {
                path.push(split[i])
            }
        }

    })

    console.error(ansObj)

    return ansObj
}
convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=%20Light%20Blue%20')

// Expected: { a: 'a&b=c?' }, instead got: { a: 'a%26b%3Dc%3F' }


// console.error(String.fromCharCode('3D'))
// {
//     'user': {
//       'name': {
//         'firstname': 'Bob',
//         'lastname': 'Smith'
//       },
//       'favoritecolor': 'Light Blue'
//     }
//   }