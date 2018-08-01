import Pearl from 'pearl.js';
class Puzzle extends Pearl {
    init() {
        this.setState({activePiece: null});
    }
}
const p = new Puzzle();
console.log(p);
export default p;