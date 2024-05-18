class Authentication {
    constructor(){
        this.sessionIdUserMap = new Map();

    }
    setUser(id, user){
        this.sessionIdUserMap.set(id,user);
    }
    getUser(id){
        this.sessionIdUserMap.get(id);
    }
}

module.exports = Authentication;