import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="scene-container">
      {/* Animated background with city and truck */}
      <div className="background-scene">
        <div className="city-skyline"></div>
        <div className="road"></div>
        <div className="petrol-truck">
          <div className="truck-body"></div>
          <div className="truck-tank"></div>
          <div className="truck-cabin"></div>
          <div className="truck-wheel wheel-1"></div>
          <div className="truck-wheel wheel-2"></div>
        </div>
        <div className="neon-glow neon-1"></div>
        <div className="neon-glow neon-2"></div>
        <div className="neon-glow neon-3"></div>
      </div>

      {/* Phone mockups */}
      <div className={`phones-container ${mounted ? 'animate-in' : ''}`}>

        {/* Customer App Phone - Left */}
        <div className="phone phone-left">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">

              {/* Customer App UI */}
              <div className="app-ui customer-app">
                {/* Status Bar */}
                <div className="status-bar">
                  <span className="time">9:41</span>
                  <div className="status-icons">
                    <div className="signal-icon"></div>
                    <div className="battery-icon"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="app-header">
                  <div className="greeting">
                    <div className="greeting-text">Good Evening</div>
                    <div className="user-name">John Parker</div>
                  </div>
                  <div className="profile-pic"></div>
                </div>

                {/* Quick Stats */}
                <div className="quick-stats">
                  <div className="stat-card">
                    <div className="stat-icon fuel-icon"></div>
                    <div className="stat-value">$1.89</div>
                    <div className="stat-label">Per Liter</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon time-icon"></div>
                    <div className="stat-value">15 min</div>
                    <div className="stat-label">Avg Delivery</div>
                  </div>
                </div>

                {/* Main Action Button */}
                <div className="cta-button">
                  <div className="button-icon"></div>
                  <span>Order Fuel Delivery</span>
                  <div className="button-glow"></div>
                </div>

                {/* Map Section */}
                <div className="map-container">
                  <div className="map-background">
                    <div className="map-street street-1"></div>
                    <div className="map-street street-2"></div>
                    <div className="map-street street-3"></div>
                    <div className="map-marker user-marker"></div>
                    <div className="map-marker truck-marker marker-1"></div>
                    <div className="map-marker truck-marker marker-2"></div>
                    <div className="map-marker truck-marker marker-3"></div>
                    <div className="map-pulse"></div>
                  </div>
                  <div className="map-label">3 trucks nearby</div>
                </div>

                {/* Bottom Nav */}
                <div className="bottom-nav">
                  <div className="nav-item active">
                    <div className="nav-icon home-icon"></div>
                    <span>Home</span>
                  </div>
                  <div className="nav-item">
                    <div className="nav-icon orders-icon"></div>
                    <span>Orders</span>
                  </div>
                  <div className="nav-item">
                    <div className="nav-icon wallet-icon"></div>
                    <span>Wallet</span>
                  </div>
                  <div className="nav-item">
                    <div className="nav-icon profile-icon"></div>
                    <span>Profile</span>
                  </div>
                </div>

              </div>
            </div>
            <div className="phone-reflection"></div>
          </div>
        </div>

        {/* Driver App Phone - Right */}
        <div className="phone phone-right">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">

              {/* Driver App UI */}
              <div className="app-ui driver-app">
                {/* Status Bar */}
                <div className="status-bar">
                  <span className="time">9:41</span>
                  <div className="status-icons">
                    <div className="signal-icon"></div>
                    <div className="battery-icon"></div>
                  </div>
                </div>

                {/* Active Delivery Header */}
                <div className="delivery-header">
                  <div className="delivery-status">
                    <div className="status-dot pulsing"></div>
                    <span>Active Delivery</span>
                  </div>
                  <div className="delivery-id">#FD-8472</div>
                </div>

                {/* Navigation Map */}
                <div className="driver-map">
                  <div className="route-background">
                    <div className="route-line"></div>
                    <div className="route-start"></div>
                    <div className="route-end"></div>
                    <div className="route-truck"></div>
                    <div className="route-progress"></div>
                  </div>
                  <div className="map-overlay">
                    <div className="distance-badge">
                      <div className="badge-icon"></div>
                      <span>2.4 km</span>
                    </div>
                    <div className="eta-badge">
                      <span className="eta-time">8 min</span>
                      <span className="eta-label">ETA</span>
                    </div>
                  </div>
                </div>

                {/* Order Details Card */}
                <div className="order-details">
                  <div className="customer-info">
                    <div className="customer-avatar"></div>
                    <div className="customer-data">
                      <div className="customer-name">John Parker</div>
                      <div className="customer-address">342 Market Street, Downtown</div>
                    </div>
                    <div className="call-button"></div>
                  </div>

                  <div className="order-items">
                    <div className="order-item">
                      <div className="item-icon diesel-icon"></div>
                      <div className="item-details">
                        <div className="item-name">Premium Diesel</div>
                        <div className="item-quantity">45 Liters</div>
                      </div>
                      <div className="item-price">$85.05</div>
                    </div>
                  </div>

                  <div className="order-summary">
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>$85.05</span>
                    </div>
                    <div className="summary-row">
                      <span>Delivery Fee</span>
                      <span>$4.99</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>$90.04</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="driver-actions">
                    <button className="action-btn secondary-btn">Navigate</button>
                    <button className="action-btn primary-btn">Start Delivery</button>
                  </div>
                </div>

              </div>
            </div>
            <div className="phone-reflection"></div>
          </div>
        </div>

      </div>

      {/* Volumetric lighting effects */}
      <div className="light-beam beam-1"></div>
      <div className="light-beam beam-2"></div>
      <div className="light-beam beam-3"></div>
    </div>
  )
}
