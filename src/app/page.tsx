import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, UserCheck, DollarSign } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Hiring Group</h1>
          </div>
          <Link href="/login">
            <Button>Iniciar Sesión</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Sistema de Gestión de Reclutamiento y Contratación</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Plataforma integral para el manejo de procesos de reclutamiento, contratación y nómina a nivel nacional.
          Conectamos empresas con talento calificado.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/register/company">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Registrar Empresa
            </Button>
          </Link>
          <Link href="/register/candidate">
            <Button size="lg" variant="outline">
              Buscar Empleo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Reclutamiento</CardTitle>
              <CardDescription>Gestión completa de vacantes y procesos de selección</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Publicación de ofertas laborales</li>
                <li>• Filtrado de candidatos</li>
                <li>• Seguimiento de postulaciones</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <UserCheck className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Contratación</CardTitle>
              <CardDescription>Proceso completo de contratación de personal</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Selección de candidatos</li>
                <li>• Gestión de contratos</li>
                <li>• Onboarding de empleados</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <DollarSign className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Nómina</CardTitle>
              <CardDescription>Administración completa de nóminas y pagos</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cálculo automático de nóminas</li>
                <li>• Descuentos legales (IVSS, INCES)</li>
                <li>• Reportes detallados</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Hiring Group. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
