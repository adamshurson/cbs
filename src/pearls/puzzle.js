import Pearl from '@ashurson/pearljs';
export default class Puzzle extends Pearl {
    init() {
        this.setState({activePiece: null});
    }
    setActivePiece(activePiece) {
        this.setState({
            activePiece: activePiece
        });
    }
}