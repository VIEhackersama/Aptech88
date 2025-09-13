import React, { useEffect, useState } from "react";
import "./PetOwners.css";
import axios from "axios";

interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  img_url?: string;
}

export default function PetOwners() {
  const [filter, setFilter] = useState<string>("All");
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<boolean>(false);

  // Form không có id, Laravel sẽ tự gán
  const [formData, setFormData] = useState<Omit<Pet, "id">>({
    name: "",
    species: "",
    breed: "",
    age: 0,
    gender: "",
    img_url: "",
  });

  // Lấy token từ localStorage (hoặc context tuỳ bạn login)
  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  // Lấy danh sách pets khi load trang
  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const res = await api.get<Pet[]>("/pets");
        setPets(res.data);
      } catch (err) {
        console.error("Error fetching pets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  // Lọc thú cưng
  const filteredPets =
    filter === "All"
      ? pets
      : pets.filter(
          (pet) => pet.species.toLowerCase() === filter.toLowerCase()
        );

  // Xử lý nhập form
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  // Gửi form thêm thú cưng
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await api.post<Pet>("/pets", formData);
      setPets((prev) => [...prev, res.data]); // cập nhật danh sách
      setFormData({
        name: "",
        species: "",
        breed: "",
        age: 0,
        gender: "",
        img_url: "",
      });
      setShowForm(false);
    } catch (err) {
      console.error("Error adding pet:", err);
    }
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
        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <div className="row">
            {filteredPets.map((pet) => (
              <div key={pet.id} className="col-md-4 mb-4">
                <div className="card shadow-sm h-100">
                  <img
                    src={
                      pet.img_url ||
                      "https://cdn-icons-png.flaticon.com/512/616/616408.png"
                    }
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
        )}
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
                name="img_url"
                placeholder="Link ảnh"
                value={formData.img_url}
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
