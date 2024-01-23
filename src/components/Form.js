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
            type="number"
            id="cardnumber"
            name="cardnumber"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="card-info">
          <div className="flex-column">
            <div className="row">
              <div>
                <label
                  className="exp_date_label"
                  for="exp_date"
                >
                  Exp. Date (MM/YY)
                </label>
              </div>
            </div>
            <div className="flex-row">
              <input
                type="number"
                id="exp_date mm"
                className="exp_date"
                placeholder="MM"
              />
              <input
                type="number"
                id="exp_date yy"
                className="exp_date"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="flex-column">
            <div className="row">
              <label
                className="cvc"
                for="cvc"
              >
                CVC
              </label>
            </div>
            <input
              type="number"
              id="cvc"
              name="cvc"
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <button className="btn-confirm">Confirm</button>
      </div>
    </form>
  );
}
