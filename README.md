## 📙 About <a name = "about"></a>

### Proccess

1. Intialized a simple local repository, installed the necessary dependencies ( express and nodemon for server setup and continuous development ).
2. Implemented necessary script in the package.json to keep the application running while developing.
3. Populated enough data according to the model given in the PDF.
4. Created the endpoint and manual pagination logic following the given rules.
5. Deployed to Heroky for public access and pushed code to Github repository.

### Notes

#### Pagination Implementation

From the description given in the PDF it seemed that this implementation had a few unique characteristics:

1. It had a nested query string in a stringified Object form.
1. The pagination could start based on finding matches for the start value, not just an index value.

For the first challnge, I decided to use a query parameter parser that would create an object based on a given key prefix, eg. `?range.by=name&range.start="my-app-001"` would become `{"range": {"by": "name", "start"="my-app-001"}}`

For the second I created a function `getResult` which attempts to find the matches given by the query params within the array.

Ultimately, for the sorting logic I chose to use a switch statement which incorporated its default ascending logic and descending logic for both expected data types. Reason why I chose this way is for performance reason and rather than adding another `O(n)` to the runtime complexity, our sort/reverse could run in `O(n log n)` instead.

#### Query Parameter Structure

Due to the complexity of nested strings in URLs and UX, I decided to interpret the query as a nested query string in the for of `?key.subkey=value`.
This way I would be able to parse the query parameters for the key and store all the subkey values in an object.

| Example Queries                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- |
| https://mdlive-qa-app.herokuapp.com/apps                                                                            |
| https://mdlive-qa-app.herokuapp.com/apps?range.by=id                                                                |
| https://mdlive-qa-app.herokuapp.com/apps?range.start=5&range.end=28&range.max=25                                    |
| https://mdlive-qa-app.herokuapp.com/apps?range.by=name&range.order=asc&range.start=my-app-150                       |
| https://mdlive-qa-app.herokuapp.com/apps?range.by=name&range.order=desc&range.start=my-app-150&range.end=my-app-120 |

| Query Parameters | Type                  | Default                | Description                                                                                                                          |
| :--------------- | :-------------------- | :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| range<i></i>.by  | `String`              | `"id"`                 | Only supports querying by "id" or "name". <p> **NOTE:** _Must use `String` for range.start and range.end when specifying "name"_</p> |
| range.max        | `Number`              | `50`                   | Maximum number of entries to return.                                                                                                 |
| range.order      | `String`              | `"asc"`                | Sets Either 'asc' for ascending order or 'desc' for descending order.                                                                |
| range.start      | `String` or `Integer` | `50` or `"my-app-001"` | Identifier to match the start entry's range<i></i>.by property                                                                       |
| range.end        | `String` or `Integer` | `null`                 | Identifier to match the end entry's range<i></i>.by property                                                                         |
| range.page       | `Integer`             | `1`                    | Identifier to match the current page number                                                                                          |

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJS](https://nodejs.org/) - Backend
- [Express.js](https://expressjs.com/) - Web Framework

# ✍️ Author <a name = "author"></a>

- [Adrian Garcia](https://github.com/gadrian99)
