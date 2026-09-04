"use client";

import React, { useEffect } from "react";
import { usePlatform } from "@/context/PlatformContext";
import { X, Bell, CheckCheck, ExternalLink } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export function NotificationDrawer() {
  const {
    isNotificationDrawerOpen,
    setIsNotificationDrawerOpen,
    notifications,
    markNotificationAsRead,
  } = usePlatform();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsNotificationDrawerOpen(false);
    };
    if (isNotificationDrawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isNotificationDrawerOpen, setIsNotificationDrawerOpen]);

  if (!isNotificationDrawerOpen) return null;

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsNotificationDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-slate-100 text-slate-800">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Centro de Notificaciones</h3>
                <p className="text-xs text-slate-500">
                  {unreadCount > 0 ? `${unreadCount} no leídas` : "Todas leídas"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsNotificationDrawerOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={clsx(
                  "p-3.5 rounded-xl border transition-all duration-150 text-xs",
                  notif.read
                    ? "bg-white border-slate-200/80 text-slate-600"
                    : "bg-blue-50/50 border-blue-200/80 text-slate-900 shadow-xs"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-slate-900">{notif.title}</span>
                  <span className="text-[10px] text-slate-400 shrink-0">{notif.timestamp}</span>
                </div>
                <p className="text-slate-600 mt-1 leading-relaxed">{notif.message}</p>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                  {notif.link ? (
                    <Link
                      href={notif.link}
                      onClick={() => {
                        markNotificationAsRead(notif.id);
                        setIsNotificationDrawerOpen(false);
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Ver detalle <ExternalLink className="w-3 h-3" />
                    </Link>
                  ) : (
                    <span />
                  )}
                  {!notif.read && (
                    <button
                      onClick={() => markNotificationAsRead(notif.id)}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800"
                    >
                      <CheckCheck className="w-3 h-3" /> Marcar leída
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
            <button
              onClick={() => {
                notifications.forEach((n) => markNotificationAsRead(n.id));
              }}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900"
            >
              Marcar todas como leídas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
