export class App{
    city = 'San Francisco';
}

template: `Hello {{ city }}`;
template:` hello {{city}},{{1 + 1}}`;

template:`<app-user/>`;
 imports:[User];
template:`
<section><app-user /></section>
`;