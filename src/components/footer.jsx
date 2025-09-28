export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 py-8">
        
        <div>
          <h3 className="font-semibold mb-2">Help & Information</h3>
          <ul className="space-y-1 text-sm">
            <li>Help</li>
            <li>Track order</li>
            <li>Delivery & Return</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">PT. BYZU Apparel</h3>
          <p className="text-sm">©2025.All Rights Reserved | PT. BYZU Apparel </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">More details</h3>
          <ul className="space-y-1 text-sm">
            <li>About us</li>
            <li>Career</li>
            <li>Our Business</li>
            <li>Privacy policy</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
