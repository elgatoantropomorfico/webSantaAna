'use client';
import { useState } from 'react';
import styles from './BookingCalendar.module.css';
import {
  Bed,
  DoorOpen,
  Calculator,
  CircleDollarSign,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Phone
} from 'lucide-react';

export default function BookingCalendar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isMinimized, setIsMinimized] = useState(false);

  const DAILY_RATE = 99000;
  const MAX_DAYS = 5;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const isDateSelected = (date: Date) => {
    if (!startDate) return false;
    if (!endDate) return date.toDateString() === startDate.toDateString();
    return date.toDateString() === startDate.toDateString() || 
           date.toDateString() === endDate.toDateString();
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (clickedDate < today) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else {
      if (clickedDate < startDate) {
        setStartDate(clickedDate);
        setEndDate(null);
      } else {
        const daysDiff = Math.ceil((clickedDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        if (daysDiff <= MAX_DAYS) {
          setEndDate(clickedDate);
        }
      }
    }
  };

  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return daysDiff * DAILY_RATE;
  };

  const getDayCount = () => {
    if (!startDate || !endDate) return 0;
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleWhatsAppBooking = () => {
    if (!startDate || !endDate) return;
    
    const days = getDayCount();
    const total = calculateTotal();
    const message = `🏠 *RESERVA CASA SANTA ANA*
    
📅 *Fechas solicitadas:*
Check-in: ${formatDate(startDate)}
Check-out: ${formatDate(endDate)}

📊 *Detalle de la reserva:*
• Cantidad de días: ${days}
• Precio por día: ${formatCurrency(DAILY_RATE)}
• *TOTAL: ${formatCurrency(total)}*

¡Hola! Me interesa reservar Casa Santa Ana para las fechas indicadas. ¿Está disponible?`;

    const whatsappUrl = `https://wa.me/5493794789169?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isPast = date < today;
      const isSelected = isDateSelected(date);
      const isInRange = isDateInRange(date);

      days.push(
        <button
          key={day}
          className={`${styles.dayButton} ${isPast ? styles.pastDay : ''} ${
            isSelected ? styles.selectedDay : ''
          } ${isInRange ? styles.rangeDay : ''}`}
          onClick={() => handleDateClick(day)}
          disabled={isPast}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          <button onClick={prevMonth} className={styles.navButton}>‹</button>
          <h3 className={styles.monthYear}>
            {currentMonth.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}
          </h3>
          <button onClick={nextMonth} className={styles.navButton}>›</button>
        </div>

      <div className={styles.info}>
        <p>Selecciona fechas de check-in y check-out (máximo 5 días)</p>
      </div>
        <div className={styles.weekDays}>
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
            <div key={day} className={styles.weekDay}>{day}</div>
          ))}
        </div>

        <div className={styles.daysGrid}>
          {renderCalendar()}
        </div>

        
      </div>

     

    

      {/* Absolute positioned booking summary */}
      {startDate && endDate && (
        <div className={`${styles.checkoutNavbar} ${isMinimized ? styles.minimized : ''}`}>
          <button 
            className={styles.minimizeButton}
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? "Expandir checkout" : "Minimizar checkout"}
          >
            {isMinimized ? (
              <ChevronUp className={styles.dateIcon} />
            ) : (
              <ChevronDown className={styles.dateIcon} />
            )}
          </button>
          
          {!isMinimized && (
            <div className={styles.checkoutContent}>
              <div className={styles.dateRangeNavbar}>
                <div className={styles.dateItemNavbar}>
                  <Bed className={styles.dateIcon} />
                  <div className={styles.dateDetails}>
                    <span className={styles.dateLabel}>Check-in</span>
                    <span className={styles.dateValue}>{formatDate(startDate)}</span>
                  </div>
                </div>
                <div className={styles.dateItemNavbar}>
                  <DoorOpen className={styles.dateIcon} />
                  <div className={styles.dateDetails}>
                    <span className={styles.dateLabel}>Check-out</span>
                    <span className={styles.dateValue}>{formatDate(endDate)}</span>
                  </div>
                </div>
              </div>
              <div className={styles.totalSectionNavbar}>
                <div className={styles.calculation}>
                  <Calculator className={styles.calcIcon} />
                  <span>{getDayCount()} días × {formatCurrency(DAILY_RATE)}</span>
                </div>
                <div className={styles.finalTotalNavbar}>
                  <CircleDollarSign className={styles.moneyIcon} />
                  <span className={styles.totalAmount}>{formatCurrency(calculateTotal())}</span>
                </div>
                <div className={styles.securityBadge}>
                  <ShieldCheck className={styles.securityIcon} />
                  <span className={styles.securityText}>Pago seguro garantizado</span>
                </div>
              </div>
              <button 
                className={styles.whatsappButtonNavbar}
                onClick={handleWhatsAppBooking}
              >
                <Phone className={styles.dateIcon} /> Reservar por WhatsApp
              </button>
            </div>
          )}
          
          {isMinimized && (
            <div className={styles.minimizedContent}>
              <div className={styles.minimizedInfo}>
                <span className={styles.minimizedDates}>
                  {formatDate(startDate)} - {formatDate(endDate)}
                </span>
                <span className={styles.minimizedTotal}>
                  {formatCurrency(calculateTotal())}
                </span>
              </div>
              <button 
                className={styles.whatsappButtonMinimized}
                onClick={handleWhatsAppBooking}
              >
                <Phone className={styles.dateIcon} /> Reservar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
