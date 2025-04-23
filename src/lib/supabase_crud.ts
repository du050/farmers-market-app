import supabase from "./supabase";


const MAP_TABLE = "map_table";

export async function getVendorLocations() {
    try {
        const { data, error } = await supabase
        .from(MAP_TABLE)
        .select('id, latitude, longitude, vender_name, icon_url');
        if (error) {
            console.error("Error fetching vender locations:", error.message);
            return { data: null, error };
        }
        return { data, error: null };
    } catch (error) {
        console.error("Unexpected error fetching vender locations:", error);
        return { data: null, error };
    }
}
