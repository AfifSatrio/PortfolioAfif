const BodyContact = () => {
  return (
    // CONTACT SECTION
    <div className="contact mt-0 px-10 scroll-mt-25" id="contact" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-5xl font-bold text-center">
            Contact
        </h1>
        <p className="text-base/loose text-center mb-10">Let's Connect With Me</p>
        <form action="https://formsubmit.co/afifsatria2108@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Name</label>
                    <input type="text" name="name" placeholder="Input Name..." className="border border-zinc-500 p-2 rounded-md" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input type="email" name="email" placeholder="Input Email..." className="border border-zinc-500 p-2 rounded-md" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Message</label>
                    <textarea name="message" id="message" cols="45" rows="7" placeholder="Your Message..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-amber-500 hover:bg-orange-300 p-3 rounded-lg w-full">Sent Message</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default BodyContact