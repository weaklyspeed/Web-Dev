@Component({
    template: `
        @for(os of operatingSystems;track os.id){
            {{os.name}}
        }
    `,
})
export class App{
    operatingSystems = [{id : 'win',name: 'Windows'},{id : 'osx',name:'MacOS'},{id:'linux',name:'Linux'}];
}