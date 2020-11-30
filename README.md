# PROJECT WORKSHEET

### PROJECT DESCRIPTION

Panion is a travel buddy app where everything you could need while travelling is in one place! Instead of constantly switching between apps, you can now translate words and phrase, find attractions, and even study vocab you choose!

### PROJECT LINKS

[Backend](https://github.com/friedaabdo/Panion-rails.git)

### MVP

- User can translate words and phrases
- User can save translated items to be able to study them via flashcards
- User can find attractions and activities in their location
- User can save locations and activities to keep them in one place

### POST MVP

- User can sign in
- add weather
- add currency exchange
- add budget tracker

### ROUTE TABLES

#### Flashcards Routes

Controller - "/flashcards"

| Verb       | Route  | Action |
| ---------- | ------ | ------ |
| Get        | "/"    | Index  |
| Post       | "/"    | Create |
| Delete One | "/:id" | Delete |

#### Points of Interest Routes

Controller - "/pois"

| Verb       | Route  | Action |
| ---------- | ------ | ------ |
| Get All    | "/"    | Index  |
| Get        | "/:id" | Show   |
| Post       | "/"    | Create |
| Delete One | "/:id" | Delete |

### COMPONENTS

| Component   | Description                                              |
| ----------- | -------------------------------------------------------- |
| App         | Login/Choose City                                        |
| Translate   | Google translate/current history of translations         |
| Attractions | Attractions and activities at city                       |
| About       | About Panion and how to use the app, also about me       |
| Flashcards  | Where saved translations are stored and studied          |
| POIS        | Saved points of interest                                 |
| Home        | Maybe have daily weather and links to other parts of app |
| NavBar      | Navigation around the app                                |

### TIME TABLE

| Component                  | Priority | Estimated Time     | Actual Time    |
| -------------------------- | -------- | ------------------ | -------------- |
| Learn Vue                  | H        | 15                 | 20             |
| Figure out Translate API   | H        | 10                 | 15             |
| Figure out Attractions API | H        | 5                  | 10             |
| Create Tables/scaffolds    | H        | 3                  | 2              |
| Connect back to front      | H        | 2                  | 1              |
| Test all APIs              | H        | 6                  | 5              |
| Figure out Flashcard logic | H        | 7                  | 5              |
| Switch/Link/Routes         | H        | 2                  | 3              |
| Styling                    | M        | 8                  | 10             |
| Mobile/Tablet/Desktop      | M        | 4                  | 1              |
| Flashcard animation        | L        | 5                  |                |
| Authentication             | L        | 6                  |                |
|                            |          | Total Time: 69 hrs | Total Time: 73 |

## ISSUES & RESOLUTIONS

### Issue

### Resolution

### CODE SNIPPETS
