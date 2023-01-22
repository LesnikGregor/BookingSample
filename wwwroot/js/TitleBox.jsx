//const { string } = require("prop-types");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var x = months[d.getMonth()];

class TitleBox extends React.Component {

    constructor(props) {
        super(props)
        this.prejsnjiMesec = this.prejsnjiMesec.bind(this);
        this.naslednjiMesec = this.naslednjiMesec.bind(this);
        this.bookTerminForm = this.bookTerminForm.bind(this);
        this.state = { thisMonth: x }
    }

    naslednjiMesec() {
        d.setMonth(d.getMonth() + 1);
        x = months[d.getMonth()];
        this.setState({ thisMonth: x });
    }

    prejsnjiMesec() {
        d.setMonth(d.getMonth() - 1);
        x = months[d.getMonth()];
        this.setState({ thisMonth: x });
    }

    
    bookTerminForm() {
        $.ajax({
            cache: false,
            url: testUrl,
            method: "GET",
            success: function(data) {
                window.location.href = testUrl;
            }
        });
    }

    render() {
        const global = { boxSizing: 'border-box' }
        const month = { padding: '70px 25px', width: '100%', background: '#1abc9c', textAlign: 'center'}
        const monthUl = { margin: '0', padding: '0', listStyleType: 'none' }
        const monthUlLi = {color: 'white', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '3px' }
        const monthPrev = { float: 'left', paddingTop: '10px' }
        const monthNext = { float: 'right', paddingTop: '10px' }
        const weekdaysUl = { margin: '0', padding: '10px 0', backgroundColor: '#ddd'}
        const weekdaysLi = { display: 'inline-block', width: '13.6%', textAlign: 'center', color: '#666' }
        const daysUl = { margin: '0', padding: '10px 0', backgroundColor: '#eee'}
        const daysLi = { display: 'inline-block', width: '13.6%', textAlign: 'center', color: '#777'}

        return (

            <div className="TitleBox" style={global}> Booking Sample
                <button onClick={() => this.bookTerminForm()}>Naroči se</button>
                <div style={month}>
                    <ul style={monthUl}>
                        <button className="prev" style={monthPrev} onClick={this.prejsnjiMesec}>&#10094;</button>
                        <button className="next" style={monthNext} onClick={this.naslednjiMesec}>&#10095;</button>
                        <li style={monthUlLi}>
                            <span id="currMonth">{this.state.thisMonth}</span><br />
                            <span style={{ fontSize: 18 }}> 2023 </span>
                        </li>
                    </ul>
                </div>
                <ul className="weekdays" style={weekdaysUl}>
                    <li style={weekdaysLi}>Mo</li>
                    <li style={weekdaysLi}>Tu</li>
                    <li style={weekdaysLi}>We</li>
                    <li style={weekdaysLi}>Th</li>
                    <li style={weekdaysLi}>Fr</li>
                    <li style={weekdaysLi}>Sa</li>
                    <li style={weekdaysLi}>Su</li>
                </ul>
                <ul className="days" style={daysUl}>
                    <li id="1" style={daysLi}>1</li>
                    <li id="2" onClick={this.bookTerminForm} style={daysLi}>2</li>
                    <li id="3" onClick={this.bookTerminForm} style={daysLi}>3</li>
                    <li id="4" onClick={this.bookTerminForm} style={daysLi}>4</li>
                    <li id="5" onClick={this.bookTerminForm} style={daysLi}>5</li>
                    <li id="6" onClick={this.bookTerminForm} style={daysLi}>6</li>
                    <li id="7" onClick={this.bookTerminForm} style={daysLi}>7</li>
                    <li id="8" onClick={this.bookTerminForm} style={daysLi}>8</li>
                    <li id="9" onClick={this.bookTerminForm} style={daysLi}>9</li>
                    <li id="10" onClick={this.bookTerminForm} style={daysLi}>10</li>
                    <li id="11" onClick={this.bookTerminForm} style={daysLi}>11</li>
                    <li id="12" onClick={this.bookTerminForm} style={daysLi}>12</li>
                    <li id="13" onClick={this.bookTerminForm} style={daysLi}>13</li>
                    <li id="14" onClick={this.bookTerminForm} style={daysLi}>14</li>
                    <li id="15" onClick={this.bookTerminForm} style={daysLi}>15</li>
                    <li id="16" onClick={this.bookTerminForm} style={daysLi}>16</li>
                    <li id="17" onClick={this.bookTerminForm} style={daysLi}>17</li>
                    <li id="18" onClick={this.bookTerminForm} style={daysLi}>18</li>
                    <li id="19" onClick={this.bookTerminForm} style={daysLi}>19</li>
                    <li id="20" onClick={this.bookTerminForm} style={daysLi}>20</li>
                    <li id="21" onClick={this.bookTerminForm} style={daysLi}>21</li>
                    <li id="22" onClick={this.bookTerminForm} style={daysLi}>22</li>
                    <li id="23" onClick={this.bookTerminForm} style={daysLi}>23</li>
                    <li id="24" onClick={this.bookTerminForm} style={daysLi}>24</li>
                    <li id="25" onClick={this.bookTerminForm} style={daysLi}>25</li>
                    <li id="26" onClick={this.bookTerminForm} style={daysLi}>26</li>
                    <li id="27" onClick={this.bookTerminForm} style={daysLi}>27</li>
                    <li id="28" onClick={this.bookTerminForm} style={daysLi}>28</li>
                    <li id="29" onClick={this.bookTerminForm} style={daysLi}>29</li>
                    <li id="30" onClick={this.bookTerminForm} style={daysLi}>30</li>
                    <li id="31" onClick={this.bookTerminForm} style={daysLi}>31</li>
                </ul>
            </div>
            
        );
    }
}

ReactDOM.render(<TitleBox/>, document.getElementById('content'));