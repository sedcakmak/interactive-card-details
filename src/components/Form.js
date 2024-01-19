import "./Form.css";

export default function Form() {
  return (
    <form>
      <div className="form-wrapper">
        <div className="row">
          <label
            className="name"
            for="name"
          >
            Cardholder Name
          </label>
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="cardholdername"
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="row">
          <div>
            <label
              className="cardnumber"
              for="cardnumber"
            >
              Card Number
            </label>
          </div>
        </div>
        <div>
          <input
            type="text"
            id="cardnumber"
            name="cardnumber"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="row">
          <div>
            <label
              className="exp_date"
              for="exp_date"
            >
              Exp. Date (MM/YY)
            </label>
          </div>
        </div>
        <div>
          <input
            type="text"
            id="exp_date"
            name="exp_date"
            placeholder="MM YY"
          />
        </div>
      </div>
    </form>
  );
}
