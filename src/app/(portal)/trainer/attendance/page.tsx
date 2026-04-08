"use client";

import { useState } from "react";
import { getCurrentUser } from "@/lib/auth";
import { BRANCHES, SCHEDULE, MOCK_USERS } from "@/lib/data";

export default function TrainerAttendancePage() {
  const user = getCurrentUser();
  const trainerClasses = SCHEDULE.filter(s => s.trainer === user.name);
  const [selectedClass, setSelectedClass] = useState(trainerClasses[0]?.name || "");

  // Use actual mock members from the trainer's branches
  const membersInBranches = MOCK_USERS.filter(u => 
    u.role === 'MEMBER' && 
    user.assignedBranches?.includes(u.homeBranch!)
  );

  const [attendees, setAttendees] = useState(
    membersInBranches.map(m => ({ name: m.name, status: "present" }))
  );

  const toggleStatus = (index: number, status: string) => {
    const newAttendees = [...attendees];
    newAttendees[index].status = status;
    setAttendees(newAttendees);
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-secondary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Session Control</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Session <span className="text-secondary tracking-normal">Attendance</span>
          </h1>
        </div>
      </header>

      <div className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-white/5">
        <div className="mb-8 max-w-sm">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-2 block ml-1">Select Class</label>
          <select 
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full bg-surface-container-high border border-white/5 rounded-lg px-4 py-3 focus:ring-1 focus:ring-secondary text-foreground font-medium transition-all appearance-none uppercase"
          >
             {trainerClasses.map((cls, i) => (
               <option key={i} value={cls.name}>{cls.name} ({cls.time})</option>
             ))}
          </select>
        </div>

        {selectedClass ? (
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase tracking-widest border-b border-white/10 pb-4 mb-4">Roster for {selectedClass}</h3>
            {attendees.map((attendee, i) => (
              <div key={i} className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-white/5">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                       <span className="material-symbols-outlined text-on-surface-variant">person</span>
                    </div>
                    <span className="font-bold uppercase tracking-widest">{attendee.name}</span>
                 </div>
                 <div className="flex gap-2">
                    <button 
                      onClick={() => toggleStatus(i, "present")}
                      className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${attendee.status === "present" ? "bg-secondary text-secondary-foreground" : "bg-surface-container-high text-on-surface-variant"}`}
                    >
                       Present
                    </button>
                    <button 
                      onClick={() => toggleStatus(i, "absent")}
                      className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${attendee.status === "absent" ? "bg-error text-error-foreground" : "bg-surface-container-high text-on-surface-variant"}`}
                    >
                       Absent
                    </button>
                 </div>
              </div>
            ))}
            <div className="mt-8 flex justify-end">
              <button className="kinetic-gradient text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg">Save Attendance</button>
            </div>
          </div>
        ) : (
          <p className="text-on-surface-variant font-black uppercase tracking-widest">No classes available.</p>
        )}
      </div>

    </div>
  );
}
