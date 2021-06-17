# nest-todo-app

This is a simple Api todo List made in nestJs and postgres

## get all Todos list

| Method | Path |
|--|--|
| GET | /todos |

## create new Todo

| Method | Path |
|--|--|
| POST | /todos |

**Params**

| key | type |
|--|--|
| description | string |
| done | boolean |

## get Todo by id
| Method | Path |
|--|--|
| GET | /todos/:id |

## update Todo
| Method | Path |
|--|--|
| PATCH | /todos/:id |

**Params**

| key | type |
|--|--|
| description | string |
| done | boolean |
## Delete Todo
| Method | Path |
|--|--|
| delete | /todos/:id |
