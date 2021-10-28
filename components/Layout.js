import Header from './Header';

const layoutStyle = {
    backgroundColor: "yellow",
    padding: 20,
    margin: 20,
    border: "1px solid black"
};

const Layout = props => {
    return (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
    )
}

export default Layout;