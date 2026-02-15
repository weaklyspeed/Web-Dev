import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector:'app-user',
    template:`
    <p>Username {{username}} </p>
    <p>{{username}}'s favorite framework: {{favoriteFramework}}</p>
    <label for="framework">
        Favorite Framework: 
        <input id = "famework" type = "text" [(ngModel)] = "favoriteFramework"/>
    </label>
    `,
    improts:[FormsModule],
})
export class User{
    favoriteFramework = '';
    username = 'youngTech';
}