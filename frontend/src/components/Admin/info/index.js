import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetInfoData, ModifyInfoData } from "../../../redux/actions/info";
import Sidebar from "../Sidebar/Sidebar";
import "./style.css";

function AdminInfo() {
  const infoData = useSelector((state) => state?.info?.getInfoData);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [formData, setformData] = useState({});
  useEffect(() => {
    dispatch(GetInfoData())
      .then((res) => {
        setId(res?.data[0]?._id);
        setformData(res?.data[0]);
      })
      .catch(() => {});
  }, []);
  function updateData(e) {
    e.preventDefault();
    dispatch(ModifyInfoData(id, formData))
      .then((response) => {
        dispatch(GetInfoData())
          .then((res) => {
            setId(res?.data[0]?._id);
            setformData(res?.data[0]);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <>
      {infoData ? (
        <div className="customContainer">
          <Sidebar />
          <div className="px-1">
            <form>
              <div className="form-group col-md-6 py-2">
                <label className="py-2">Heading</label>
                <input
                  onChange={(e) => {
                    setformData({
                      ...formData,
                      heading: e.target.value,
                    });
                  }}
                  value={formData?.heading}
                  type="heading"
                  className="form-control"
                  placeholder="Heading"
                />
              </div>
              <div className="form-group col-md-6 py-2">
                <label className="py-2">Text</label>
                <input
                  onChange={(e) => {
                    setformData({
                      ...formData,
                      text: e.target.value,
                    });
                  }}
                  value={formData?.text}
                  type="text"
                  className="form-control"
                  placeholder="Text"
                />
              </div>
              <div className="form-group col-md-6 py-2">
                <label className="py-2">Display</label>
                <div>
                  <input
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        display: e.target.checked,
                      });
                    }}
                    class="form-check-input"
                    type="checkbox"
                  />
                </div>
              </div>
              <button
                onClick={updateData}
                type="submit"
                className="btn btn-primary my-3"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminInfo;
