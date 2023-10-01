import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-5 d-flex justify-content-center">
            <img
              src="https://pngimg.com/d/envelope_PNG18397.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Ibrahim The White"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
