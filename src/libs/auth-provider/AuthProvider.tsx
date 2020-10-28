class AuthProvider {
    private library: any

    constructor(library: any) {
        this.library = library
    }

    setLibrary(library: any) {
        this.library = library
    }

    getLibrary() {
        return this.library
    }

    public execute() {
        return this.library.webAuth.authorize({ scope: 'openid email profile' })
    }
};

export default AuthProvider