/* Address fields used by the website enquiry forms. */
export const emptyAddress = { address: "", landmark: "", city: "", pincode: "" };

/** One line for the CRM and email, e.g. "B-12, Main Road, Paschim Vihar, near Metro Station, New Delhi - 110063". */
export function fullAddress(f: { address: string; landmark: string; city: string; pincode: string }): string {
  const parts = [f.address.trim(), f.landmark.trim() ? `near ${f.landmark.trim()}` : "", f.city.trim()].filter(Boolean);
  return parts.join(", ") + (f.pincode.trim() ? ` - ${f.pincode.trim()}` : "");
}
