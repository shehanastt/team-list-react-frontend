"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Table.module.scss";
import { teamMembers as initialMembers } from "../DB/Members";

const Table: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [members, setMembers] = useState(initialMembers);

  const [openStatusId, setOpenStatusId] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<"top" | "bottom">("bottom");

  const toggleSelectAll = () => {
    if (selectedIds.length === members.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(members.map((m) => m.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleStatusClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    setPopupPosition(spaceBelow < 150 && spaceAbove > 150 ? "top" : "bottom");
    setOpenStatusId(openStatusId === id ? null : id);
  };

  useEffect(() => {
    const closePopup = () => setOpenStatusId(null);
    window.addEventListener("click", closePopup);
    window.addEventListener("scroll", closePopup);
    return () => {
      window.removeEventListener("click", closePopup);
      window.removeEventListener("scroll", closePopup);
    };
  }, []);

  const handleStatusChange = (id: string, newStatus: string) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, status: [newStatus] } : m
      )
    );
    setOpenStatusId(null);
  };

  const statusOptions = [
    "active",
    "busy",
    "away",
    "onleave",
    "terminated",
    "donotdisturb",
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.teamTable}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedIds.length === members.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className={styles.nameHeader}>Name</th>
            <th>
              Status
              <img src="./images/status.png" alt="status" />
            </th>
            <th>
              Role
              <img src="./images/role.png" alt="role" />
            </th>
            <th>Email Address</th>
            <th>Teams</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(member.id)}
                  onChange={() => toggleSelect(member.id)}
                />
              </td>

              <td className={styles.nameCell}>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className={styles.avatar}
                />
                <div className={styles.nameInfo}>
                  <span className={styles.name}>{member.name}</span>
                  <span className={styles.username}>{member.username}</span>
                </div>
              </td>

              {/* Status cell */}
              <td style={{ position: "relative" }}>
                {member.status.map((st) => (
                  <button
                    key={st}
                    className={`${styles.statusBadge} ${
                      styles[st.toLowerCase().replace(/\s/g, "")]
                    }`}
                    onClick={(e) => handleStatusClick(member.id, e)}
                  >
                    {st}
                  </button>
                ))}

                {openStatusId === member.id && (
                  <div
                    className={`${styles.statusPopup} ${
                      styles[popupPosition]
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={styles.statusList}>
  {statusOptions.map((s, index) => (
    <React.Fragment key={s}>
      <div
        className={styles.statusOption}
        onClick={() => handleStatusChange(member.id, s)}
      >
        <span
          className={`${styles.dot} ${styles[s.toLowerCase()]}`}
        ></span>
        {s}
      </div>
            {index < statusOptions.length - 1 && <hr className={styles.divider} />}
            </React.Fragment>
        ))}

        <div className={styles.addStatus}>
            <img src="./images/Group.png" alt="add" className={styles.plusIcon} />
            Add Status
        </div>

        <div className={`${styles.arrow} ${styles[popupPosition]}`}></div>
        </div>

                  </div>
                )}
              </td>

              <td>{member.role}</td>
              <td>{member.email}</td>

              <td className={styles.teamsCell}>
                {member.teams.slice(0, 3).map((team, index) => (
                  <span
                    key={team}
                    className={`${styles.teamPill} ${
                      index === 0
                        ? styles.first
                        : index === 1
                        ? styles.second
                        : styles.third
                    }`}
                  >
                    {team}
                  </span>
                ))}
                {member.teams.length > 3 && (
                  <span className={`${styles.teamPill} ${styles.more}`}>
                    +{member.teams.length - 3}
                  </span>
                )}
              </td>

              <td className={styles.deleteIcon}>
                <img src="./images/dustbin.png" alt="delete" />
              </td>
              <td className={styles.editIcon}>
                <img src="./images/icon.png" alt="edit" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
