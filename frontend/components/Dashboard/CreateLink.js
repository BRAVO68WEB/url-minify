import CreateLinkStyle from './createlink.style'

function Links() {
  return (
    <div className="frame">
      <h2>Create a link</h2>

      <div className="card">
        <form action="#">
          <div className="hugediv">
            <label for="hugeInput">Huge link</label>

            <input
              type="text"
              id="hugeInput"
              placeholder="https://www.example.com/abc/xyz"
            />
          </div>
          <div className="aliasdiv">
            <label for="customAlias">Custom alias</label>

            <input
              type="text"
              id="customAlias"
              placeholder="shorturl.com/url"
            />
          </div>
          <div className="titlediv">
            <label for="title">Title</label>

            <input type="text" id="title" placeholder="Enter the Title" />
          </div>
          <div className="textdiv">
            <label for="desc">Description</label>

            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              placeholder="Enter the Description"
            ></textarea>
          </div>

          <div className="btndiv">
            <button>Cancel</button>

            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function CreateLink() {
  return (
    <CreateLinkStyle>
      <Links />
    </CreateLinkStyle>
  )
}

export default CreateLink
