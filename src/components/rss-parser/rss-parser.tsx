import React from "react";

export class RssParser extends React.Component {
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }

    componentDidMount() {

         fetch('https://74.ru/text/rss.region.xml')
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => console.log(data))
    }

    render() {
        return (
            <button className="square" onClick={() => console.log('клик')}> 12313
                {/*{this.props['value']}*/}
            </button>
        );
    }
}
