class Persistence {
    private library: any;

    constructor(library: any) {
        this.library = library
    }

    setLibrary(library: any) {
        this.library = library
    }

    getLibrary() {
        return this.library
    }

    async store(key: string, value: string) {
        return this.library.setItem(`@${key}`, value)
    }

    async retreive(key: string) {
        return this.library.getItem(`@${key}`)
    }

    async remove(key: string) {
        return this.library.removeItem(`@${key}`)
    }
};

export default Persistence;