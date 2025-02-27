import Import from "../components/Import"
import { connect } from "react-redux"
import { fetchMakes, deleteMake } from "../redux/actions"



const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        deleteMake: (index) => dispatch(deleteMake(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Import)