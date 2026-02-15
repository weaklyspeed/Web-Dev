@Component({
    template : `
        @if(isLoggedIn){
        <p>Welcome back,Friend!</p>
        }
    `,
})
export class App{
    isLoggenIn = true;
}