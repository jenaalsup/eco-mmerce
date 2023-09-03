import Link from "next/link";


const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64String = await convertToBase64(file);
      setPost({ ...post, imageBase64: base64String });
    }
  }

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Product Listing</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and buy sustainable products.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Upload an Image
          </span>

          <input 
            type="file" 
            onChange={handleFileChange} 
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Product Listing
          </span>

          <textarea
            value={post.listing}
            onChange={(e) => setPost({ ...post, listing: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Type of Listing{" "}
            <span className='font-normal'>
              (#tops, #bottoms, #dresses, #shoes, #outerwear, #intimates, #swimwear, #accessories)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='Category (limited to one)'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;