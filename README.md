# :zap: Angular Datastream Table

* App with realtime communication between app and server using a [Pusher](https://pusher.com/) channel for notifications/updates etc.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular Datastream Table](#zap-angular-datastream-table)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* The pusher channel uses a publish/subscribe model so all subscribers to the channel will receive the update. See [Pusher documentation](https://pusher.com/docs) for more information.
* The server.js file follows the [Twelve-Factor](https://12factor.net/) methodology for building software-as-a-service apps that:

'_Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;
Have a clean contract with the underlying operating system, offering maximum portability between execution environments;
Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;
Minimize divergence between development and production, enabling continuous deployment for maximum agility;
And can scale up without significant changes to tooling, architecture, or development practices._'

## :camera: Screenshots

![Example screenshot](./img/frontend-and-server.png)

## :signal_strength: Technologies

* [Angular v10](https://angular.io/)
* [rxjs v6](http://reactivex.io/) observable streams for asynschronous programming.
* [Pusher-js v7](https://pusher.com/) Real-time communication scalable features.
* [Bootstrap v4](https://getbootstrap.com/). Links added to `angular.json "styles"`
* [NgAlert v2](https://github.com/theo4u/ngAlert) alert component with different types of alert. Link added to `angular.json "styles"`.

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Get your own API key and Cluster name from [Pusher-js v5.1.1](https://pusher.com/) Sandbox Plan
* Add Pusher API Key etc. to .env file
* Add API_KEY & CLUSTER values to `environment.ts` & `environment.prod.ts`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`
* Open a second command terminal
* Run `nodemon server.js` to run the server backend. Navigate to `http://localhost:2000/`. Restarts with changes
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## :computer: Code Examples

* Function to delete an employee record with alert message before using the '_actualDelete' function.

```typescript
  delete(employee: IEmployee) {
    // show delete confirmation with ngAlert
    this._ngAlert.push({
      message: `<strong>Are you sure!</strong> you want to delete this employee with name <strong>${employee.name}</strong>`,
      type: MessageType.warning,
      buttons: [
        {
          label: 'Continue',
          action: () => {
            this._actualDelete(employee);
          },
          css: 'btn btn-danger'
        }
      ]
    });
  }

```

## :cool: Features

* Forms created using [Angular's reactive forms](https://angular.io/api/forms/ReactiveFormsModule).
* Utility/helper classes used from [Bootstrap 4](https://getbootstrap.com/).
* real-time data and functionality using [Pusher event-based API 'Pusher Channel'](https://pusher.com/).
* working local server backend.
* Data access services delegated to separate service components.
* Updated to latest Angular v11. Dependencies updated and all errors and dependency conflicts resolved.

## :clipboard: Status & To-Do List

* Status: Working front and backend. UI adds employees to the list without refreshing the browser (note: browser for server (port 2000) does have to be refreshed to show the changes). Employees can be added & deleted successfully but the edit component is not coded so not possible to edit employee records.
* To-Do: Look at employee edit function. Customise app and add functionality. Consider currency pull-down menu for salary input. Fix server.js to remove error message: `TypeError: pusher.trigger is not a function`.

## :clap: Inspiration

* [Christian Nwamba's tutorial: BUILD A REALTIME TABLE WITH ANGULAR](https://pusher.com/tutorials/realtime-table-angular),

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
