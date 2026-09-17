use serde::Serialize;

#[derive(Serialize)]
struct AppInfo {
    name: &'static str,
    version: &'static str,
}

/// Returns non-sensitive app metadata. Secrets and backend credentials remain outside the frontend bundle.
#[tauri::command]
fn app_info() -> AppInfo {
    AppInfo {
        name: "Topvon AI",
        version: env!("CARGO_PKG_VERSION"),
    }
}

pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![app_info])
        .run(tauri::generate_context!())
        .expect("error while running Topvon AI desktop application");
}
