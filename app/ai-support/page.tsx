'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type Message = {
  text: string
  sender: 'user' | 'ai'
}

export default function AISupport() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm here to help. What's on your mind today?", sender: 'ai' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      // In a real application, you would send the input to an AI service here
      // and receive a response. For now, we'll just simulate a response.
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thank you for sharing. I understand that you're feeling stressed. Would you like to try a quick mindfulness exercise?", 
          sender: 'ai' 
        }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <div className="min-h-screen bg-soft-gray py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">AI Support</h1>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <div className="mb-4 h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span 
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-soft-blue text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow"
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

