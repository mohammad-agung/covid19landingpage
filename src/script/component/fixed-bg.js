class FixedBg extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        #fixed {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./src/assets/images/map.jpg) no-repeat center center fixed;
            display: table;
            width: 100%;
            position: relative;
            background-size: cover;
        }

        #fixed .text-center {
            text-align:center;
            font-size: 48px;
            font-weight: bold;
            font-family: 'Quicksand', sans-serif;
            text-shadow: 0 0 5px rgba(0, 0, 0, 1);
            margin: 120px 0;
            color: white;
        }
        @media only screen and (min-width: 992px) {
            #fixed .text-center {
                font-size: 68px;
            }
        }
        @media only screen and (max-width: 767px) {
            #fixed .text-center {
                font-size: 32px;
                margin: 100px 0;
            }
        }
        </style>
        <div id="fixed">
            <h2 class="text-center"><strong>Stay Safe & Stay At Home</strong></h2>
        </div>
        
        `;
    }
}

customElements.define("fixed-bg", FixedBg);