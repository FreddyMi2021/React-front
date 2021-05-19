import React from 'react';
import Avatar from 'react-avatar-edit';

class ImageEditor extends React.Component {
  constructor(props) {
    super(props);
    const src = this.props.sourceImage;
    this.state = {
      preview: null,
      src,
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
    this.props.updateImage(this.state.preview);
  }

  onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 1000000) {
      alert('File is too big!');
      elem.target.value = '';
    }
  }

  render() {
    return (
      <>
        <div className="w-full flex justify-center">
          <h1 className="text-center md:text-left mb-4 px-6 py-4 font-semibold uppercase text-gray-500 dark:text-gray-300 mx-auto">
            Modification de votre avatar
          </h1>
        </div>
        <div className="flex flex-row w-full h-auto justify-around flex-wrap items-center ">
          <div className="w-max block lg:mb-0 xl:mb-0 sm:mb-8">
            <Avatar
              width={350}
              height={255}
              onCrop={this.onCrop}
              onClose={this.onClose}
              onBeforeFileLoad={this.onBeforeFileLoad}
              src={this.state.src}
              onFileLoad={this.onFileLoad}
            />
          </div>

          <div className="z-50 bg-green-700 border-b-2 border-gray-50 py-5 px-10 h-auto">
            <div className=" block relative">
              <div className="w-full rounded-full border-4 border-gray-50">
                <div className="w-full relative border-0 outline-none mx-auto">
                  <img
                    src={this.state.preview}
                    alt="preview"
                    width="255"
                    height="255"
                    className="border-0 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ImageEditor;
