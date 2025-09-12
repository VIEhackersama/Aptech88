import React, { useState } from "react";
import "./PetOwners.css";

interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  image: string;
}

export default function PetOwners() {
  const [filter, setFilter] = useState<string>("All");
  const [pets, setPets] = useState<Pet[]>([
    {
      id: 1,
      name: "Milo",
      species: "Dog",
      breed: "Shiba Inu",
      age: 3,
      gender: "Khỏe mạnh, thích chạy nhảy",
      image: "https://placedog.net/400/300?id=1",
    },
    {
      id: 2,
      name: "Luna",
      species: "Cat",
      breed: "Persian",
      age: 2,
      gender: "Cần chăm sóc dị ứng",
      image: "https://placekitten.com/400/300",
    },
     {
      id: 1,
      name: "Milo",
      species: "Dog",
      breed: "Shiba Inu",
      age: 3,
      gender: "Khỏe mạnh, thích chạy nhảy",
      image: "https://placedog.net/400/300?id=1",
    },
    {
      id: 2,
      name: "Luna",
      species: "Cat",
      breed: "Persian",
      age: 2,
      gender: "Cần chăm sóc dị ứng",
      image: "https://placekitten.com/400/300",
    },
     {
      id: 1,
      name: "Milo",
      species: "Dog",
      breed: "Shiba Inu",
      age: 3,
      gender: "Khỏe mạnh, thích chạy nhảy",
      image: "https://placedog.net/400/300?id=1",
    },
    {
      id: 2,
      name: "Luna",
      species: "Cat",
      breed: "Persian",
      age: 2,
      gender: "Cần chăm sóc dị ứng",
      image: "https://placekitten.com/400/300",
    },
  ]);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<Pet, "id">>({
    name: "",
    species: "",
    breed: "",
    age: 0,
    gender: "",
    image: "",
  });

  // Lọc thú cưng
  const filteredPets =
    filter === "All"
      ? pets
      : pets.filter((pet) => pet.species.toLowerCase() === filter.toLowerCase());

  // Xử lý nhập form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  // Thêm thú cưng mới
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedSpecies =
      formData.species.charAt(0).toUpperCase() +
      formData.species.slice(1).toLowerCase();

    const newPet: Pet = { id: Date.now(), ...formData, species: formattedSpecies };
    setPets((prev) => [...prev, newPet]);

    setFormData({
      name: "",
      species: "",
      breed: "",
      age: 0,
      gender: "",
      image: "",
    });
    setShowForm(false);
  };

  return (
    <div className="pet-page">
      {/* Banner */}
      <section className="hero-section text-white text-center position-relative">
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Pet Icon"
          className="overlay-img"
        />

        <div className="hero-content container">
          <h1 className="fw-bold">Pet Owners</h1>
          <p>Quản lý hồ sơ thú cưng của bạn dễ dàng và đẹp mắt</p>

          {/* Filter buttons */}
          <div className="filter-buttons mt-4">
            <button
              className={`btn me-2 ${
                filter === "All" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => setFilter("All")}
            >
              Tất cả
            </button>
            <button
              className={`btn me-2 ${
                filter === "Dog" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => setFilter("Dog")}
            >
              Chó
            </button>
            <button
              className={`btn me-2 ${
                filter === "Cat" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => setFilter("Cat")}
            >
              Mèo
            </button>
          </div>
        </div>
      </section>

      {/* Nút Thêm & Sửa động vật */}
      <div className="container my-4 d-flex justify-content-end">
        <button
          className="btn btn-success fw-bold"
          onClick={() => setShowForm(true)}
        >
          + Thêm & Sửa động vật
        </button>
      </div>

      {/* Danh sách thú cưng */}
      <section className="container my-5">
        <div className="row">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-success">{pet.name}</h5>
                  <p className="card-text mb-1">
                    <strong>Loài:</strong> {pet.species}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Giống:</strong> {pet.breed}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Tuổi:</strong> {pet.age}
                  </p>
                  <p className="card-text">
                    <strong>Tiền sử:</strong> {pet.gender}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal thêm/sửa thú cưng */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4 className="mb-3 text-success">Đăng ký thú cưng mới</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Tên"
                value={formData.name}
                onChange={handleChange}
                className="form-control mb-2"
                required
              />
              <select
                name="species"
                value={formData.species}
                onChange={handleChange}
                className="form-control mb-2"
                required
              >
                <option value="">-- Chọn loài --</option>
                <option value="Dog">Chó</option>
                <option value="Cat">Mèo</option>
              </select>
              <input
                type="text"
                name="breed"
                placeholder="Giống"
                value={formData.breed}
                onChange={handleChange}
                className="form-control mb-2"
              />
              <input
                type="number"
                name="age"
                placeholder="Tuổi"
                value={formData.age}
                onChange={handleChange}
                className="form-control mb-2"
              />
              <textarea
                name="gender"
                placeholder="Tiền sử bệnh"
                value={formData.gender}
                onChange={handleChange}
                className="form-control mb-2"
              />
              <input
                type="text"
                name="image"
                placeholder="Link ảnh"
                value={formData.image}
                onChange={handleChange}
                className="form-control mb-3"
              />
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => setShowForm(false)}
                >
                  Hủy
                </button>
                <button type="submit" className="btn btn-success">
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
