import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ✅ required when using cors with credentials
        }
      );

      if (res.data.success) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      if (err.response?.data?.message === "Invalid email") {
        toast.error("Invalid email!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}className="max-w-md mx-auto p-6 bg-white shadow-2xl rounded-2xl "
    >
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded focus:outline-blue-400"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded focus:outline-blue-400"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded focus:outline-blue-400"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
