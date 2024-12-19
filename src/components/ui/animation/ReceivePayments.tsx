"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PaymentCard {
  id: number;
  amount: string;
}

const ReceivePayments = () => {
  const [payments, setPayments] = useState<PaymentCard[]>([]);
  const amounts = ['+$500', '+$900', '+$1500', '+$400', '+$1000'];

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setPayments(prev => [...prev, {
        id: Date.now(),
        amount: amounts[currentIndex % amounts.length]
      }]);

      setTimeout(() => {
        setPayments(prev => prev.slice(1));
      }, 2000);

      currentIndex++;
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-80 w-full overflow-hidden">
      <AnimatePresence>
        {payments.map((payment) => (
          <motion.div
            key={payment.id}
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: 50 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 
                       bg-white rounded-lg shadow-lg p-4 mb-2
                       border border-green-200"
          >
            <span className="text-green-500 font-semibold text-lg">
              {payment.amount}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ReceivePayments;